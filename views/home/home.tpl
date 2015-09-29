{{ template "layout.tpl" . }}
{{ define "css" }}
{{ end}}

{{ define "content" }}
<div class="container home-page">
  <div class="jumbotron">
    <h1>
      <img src="/static/img/logo.png" alt="logo" class="home-logo">
      Welcome to GOGO
    </h1>
    <hr class="m-y-md">
    <p class="description">
      GOGO is a go web application build upon golang and beego framework to help people <br>
      to bootstrap their website with some awesome features in a minutes
    </p>
  </div>
</div>
{{ end }}

{{ define "js" }}
{{ end}}

