<!DOCTYPE html>
<html>
  <head>
    <title>gogo</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="shortcut icon" href="/static/img/logo.png" type="image/x-icon" />

    <!-- Bootstrap CSS & Bower Dependency css -->
    <link href="/static/css/vendor.css" rel="stylesheet">
    <link href="/static/css/main.css" rel="stylesheet">
    {{ template "css" . }}
  </head>

  <body>

    <!-- INCLUDE HEADER -->
    {{ template "common/header.tpl" . }}

    <div class="main-content">
      <!-- MAIN CONTENT GOES HERE -->
      {{ template "content" . }}
    </div>

    <div class="backdrop"></div>

    <!-- INCLUDE FOOTER -->
    {{ template "common/footer.tpl" }}

    <script src="static/js/vendor.js"></script>
    <script src="static/js/main-react.js"></script>
    {{ template "js" . }}
  </body>
</html>
