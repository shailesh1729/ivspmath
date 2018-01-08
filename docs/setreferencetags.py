"""

This scripts adds reference tags to all the RST files
which can be used anywhere in documentation
as internal references.

"""

import os
import sys


class DirectoryHandler:
    def __init__(self, rootdir):
        self.rootdir = rootdir

    def __call__(self, arg, dirname, names):
        if u'.svn' in names:
            names.remove('.svn')
        extradirs = [name for name in names if name.startswith('_')]
        for name in extradirs:
            names.remove(name)
        #lets identify the relative path
        n = len(self.rootdir)
        relativedir = dirname[n+1:]
        for name in names:
            # lets just consider the RST files
            if not name.endswith('.rst'):
                continue
            filepath = os.path.join(dirname, name)
            #if not os.path.isfile(filepath):
            #    continue
            fname, ext = os.path.splitext(name)
            filetag = os.path.join(relativedir, fname)
            filetag = filetag.replace(os.sep, '_')
            #print filetag, filepath
            self.updateFile(name, filepath, filetag)
            
        return


    def updateFile(self, filename, filepath, filetag):
        # now lets read the contents of the file
        contents = open(filepath, 'r').readlines()
        # lets walk through the last few lines
        # to find the presence of Last Modified footer.
        i = 0
        changed = False
        idFound = False
        for line in reversed(contents):
            if line.isspace(): continue
            #if i > 10: idFound = False
            if line.find('$Id') >= 0:
                idFound = True
                break
        # we don't want to add id to index pages
        if filename == 'index.rst':
            idFound = True
            #i += 1
        if not idFound:
            # the $Id phrase was not present in content
            # lets add it
            print 'adding change log to: ', filepath
            contents.append('\n')
            contents.append('\n')
            contents.append('.. rubric:: Change log\n')
            contents.append('\n')
            contents.append(':Last Modified:    $Id: setreferencetags.py 249 2012-08-05 06:17:57Z shailesh $\n')
            changed = True
        # lets see if the first few lines contain the file tag or not
        numLines = len(contents)
        minLines = min(numLines, 20)
        tagFound = False
        for line in contents[:minLines]:
            if line.find(filetag) >= 0:
                # we don't need to update this file
                tagFound = True
                break
        # if we didn't find the tag, we will need to insert it now
        if not tagFound:
            # lets add the tag to the file
            print 'Inserting file tag to: ', filepath
            # we insert lines in reverse order
            # first a blank line
            contents.insert(0, '\n')
            # then the line with tag
            contents.insert(0, '.. _%s:\n' % filetag)
            changed = True
        if not changed: return 
        # its time to write the updated contents back to file
        open(filepath, 'w').write(''.join(contents))
        return



if __name__ == '__main__':
    dir = os.getcwd()
    if len(sys.argv) > 1:
        dir = sys.argv[1]
    dir = os.path.realpath(dir)
    dirHandler = DirectoryHandler(dir)
    os.path.walk(dir, dirHandler, None)

