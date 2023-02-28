package handler

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"strconv"
	"time"

	"github.com/jinzhu/gorm"
	"github.com/ksharma67/EasyWay/server/app/model"
)

func (a *App) SearchServices(w http.ResponseWriter, r *http.Request) {
	// Parse query parameter
	query := r.URL.Query().Get("query")

	// Call handler to search services in database
	handler.SearchServices(a.DB, w, r, query)
}

func SearchServices(db *gorm.DB, w http.ResponseWriter, r *http.Request, query string) {
	// Get a list of services that match the query
	var services []model.Service
	db.Where("name LIKE ?", "%"+query+"%").Find(&services)

	// Return the list of services as a JSON response
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(services)
}
