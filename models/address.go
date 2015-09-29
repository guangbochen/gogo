package models

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"time"
)

type Address struct {
	gorm.Model
	UserId      uint
	ContactName string
	Phone       string
	City        string
	Address1    string
	Address2    string
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   *time.Time
}

func (address Address) Stringfy() string {
	return fmt.Sprintf("%v, %v, %v", address.Address1, address.Address2, address.City)
}
