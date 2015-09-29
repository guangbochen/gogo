package models

import (
	"github.com/asaskevich/govalidator"
	"github.com/jinzhu/gorm"
	"time"
)

type User struct {
	gorm.Model
	ID        uint
	Email     string `sql:"type:varchar(100);unique_index"`
	Password  string
	Name      string
	Gender    string
	Role      string
	Addresses Address // One-To-One relationship (has one)
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time
}

func (user User) DisplayName() string {
	return user.Name
}

func IsEmail(email string) bool {
	return govalidator.IsEmail(email)
}

// func (user User) AvailableLocales() []string {
// 	return []string{"en-US", "zh-CN"}
// }
