(function() {var implementors = {};
implementors["async_fs"] = [{"text":"impl AsyncRead for File","synthetic":false,"types":[]}];
implementors["async_io"] = [{"text":"impl&lt;T:&nbsp;Read&gt; AsyncRead for Async&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsyncRead for &amp;Async&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a T: Read,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["async_net"] = [{"text":"impl AsyncRead for UnixStream","synthetic":false,"types":[]},{"text":"impl AsyncRead for TcpStream","synthetic":false,"types":[]}];
implementors["async_process"] = [{"text":"impl AsyncRead for ChildStdout","synthetic":false,"types":[]},{"text":"impl AsyncRead for ChildStderr","synthetic":false,"types":[]}];
implementors["blocking"] = [{"text":"impl&lt;T:&nbsp;Read + Send + 'static&gt; AsyncRead for Unblock&lt;T&gt;","synthetic":false,"types":[]}];
implementors["futures_lite"] = [{"text":"impl&lt;T:&nbsp;Read&gt; AsyncRead for AssertAsync&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncRead&gt; AsyncRead for BufReader&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsyncRead for Cursor&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsRef&lt;[u8]&gt; + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsyncRead for Empty","synthetic":false,"types":[]},{"text":"impl AsyncRead for Repeat","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncRead&gt; AsyncRead for Take&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;AsyncRead&gt; AsyncRead for Bytes&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;R1:&nbsp;AsyncRead, R2:&nbsp;AsyncRead&gt; AsyncRead for Chain&lt;R1, R2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsyncRead + Unpin&gt; AsyncRead for ReadHalf&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()