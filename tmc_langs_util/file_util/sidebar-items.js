initSidebarItems({"fn":[["copy","Copies the file or directory at source into the target path. If the source is a file and the target is not a directory, the source file is copied to the target path. If the source is a file and the target is a directory, the source file is copied into the target directory. If the source is a directory and the target is not a file, the source directory and all files in it are copied recursively into the target directory. For example, with source=dir1 and target=dir2, dir1/file would be copied to dir2/dir1/file. If the source is a directory and the target is a file, an error is returned."],["create_dir",""],["create_dir_all",""],["create_file",""],["create_file_lock",""],["open_file",""],["open_file_lock","Does not work on directories on Windows."],["read_file",""],["read_file_to_string",""],["read_to_file","Reads all of the data from source and writes it into a new file at target."],["remove_dir_all",""],["remove_dir_empty",""],["remove_file",""],["rename",""],["temp_file",""],["write_to_file",""]],"macro":[["lock",""]],"struct":[["FileLock","Wrapper for fd_lock::FdLock. Used to lock files/directories to prevent concurrent access from multiple instances of tmc-langs."],["FileLockGuard",""]]});