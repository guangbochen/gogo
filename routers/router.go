package routers

import (
	"github.com/astaxie/beego"
	"gogo/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
}
