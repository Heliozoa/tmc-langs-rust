(function() {var implementors = {};
implementors["async_fs"] = [{"text":"impl FromRawFd for File","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl FromRawFd for Sender","synthetic":false,"types":[]},{"text":"impl FromRawFd for Receiver","synthetic":false,"types":[]},{"text":"impl FromRawFd for TcpListener","synthetic":false,"types":[]},{"text":"impl FromRawFd for TcpSocket","synthetic":false,"types":[]},{"text":"impl FromRawFd for TcpStream","synthetic":false,"types":[]},{"text":"impl FromRawFd for UdpSocket","synthetic":false,"types":[]},{"text":"impl FromRawFd for UnixDatagram","synthetic":false,"types":[]},{"text":"impl FromRawFd for UnixListener","synthetic":false,"types":[]},{"text":"impl FromRawFd for UnixStream","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl FromRawFd for Inotify","synthetic":false,"types":[]},{"text":"impl FromRawFd for TimerFd","synthetic":false,"types":[]}];
implementors["socket2"] = [{"text":"impl FromRawFd for Socket","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl FromRawFd for TcpSocket","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()