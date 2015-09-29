package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "https://github.com/guangbochen/gogo"
	c.Data["Email"] = "gc.guangbo@gmail.com"
	c.TplNames = "home/home.tpl"
}
