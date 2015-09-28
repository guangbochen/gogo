<!DOCTYPE html>

<html>
<head>
  <title>gogo</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link rel="shortcut icon" href="/static/img/goimg1910.png" type="image/x-icon" />
  <link href="/static/css/vendor.css" rel="stylesheet">
  <link href="/static/css/main.css" rel="stylesheet">
</head>

<body>
  <header>
    <h1 class="logo">Welcome to GOGO</h1>
    <div class="description">
    GOGO is a go web application build upon golang and beego framework to help people <br>
    to bootstrap their website with some awesome features in a minutes
    </div>
  </header>
  <footer>
    <div class="author">
      Github:
      <a href="{{.Website}}" target="_blank">{{.Website}}</a> /
      Contact me:
      <a class="email" href="mailto:{{.Email}}">{{.Email}}</a>
      <small id="react"></small>
    </div>
  </footer>
  <div class="backdrop"></div>
  <script src="static/js/vendor.js"></script>
  <script src="static/js/main-react.js"></script>
</body>
</html>
