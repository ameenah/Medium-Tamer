package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func main() {

	db, _ := sql.Open("sqlite3", "/home/ameenah/CODE/Medium-Tamer/cookies.sqlite")
	rows, err := db.Query("SELECT * FROM moz_cookies")
	if err != nil {
		fmt.Println("1111111", err)
	}
	var id int
	var baseDomain string
	var originAttribute string
	var name string
	var value string
	var host string
	var path string
	var expiry int
	var lastAccessed int
	var creationTime int
	var inSecure int
	var isHtttpOnly int
	var inBrowserElement int
	var sameSite int

	for rows.Next() {
		err := rows.Scan(&id, &baseDomain, &originAttribute, &name, &value, &host, &path, &expiry, &lastAccessed, &creationTime, &inSecure, &isHtttpOnly, &inBrowserElement, &sameSite)
		if err == nil {
			//fmt.Println(name + "  " + value)
			fmt.Println(baseDomain)
		} else {
			fmt.Println(err)
		}

	}

	fmt.Println("mmmmmmmmm")
}
