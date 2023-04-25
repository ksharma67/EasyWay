package handler

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/jinzhu/gorm"
	"github.com/ksharma67/EasyWay/server/app/model"
)

// GetAllBlogs retrieves all blog posts.
func GetAllBlogs(db *gorm.DB, w http.ResponseWriter, r *http.Request) {
	// Query the database for all blog posts.
	blogs := []model.Blog{}
	if err := db.Find(&blogs).Error; err != nil {
		http.Error(w, "Error retrieving blogs", http.StatusInternalServerError)
		return
	}

	// Convert the blogs to JSON and write them to the response.
	jsonBytes, err := json.Marshal(blogs)
	if err != nil {
		http.Error(w, "Error converting blogs to JSON", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonBytes)
}

// GetAllComments retrieves all comments for a specific blog post.
func GetAllComments(db *gorm.DB, w http.ResponseWriter, r *http.Request) {
	// Get the blog ID from the request parameters.
	blogId, err := strconv.Atoi(r.URL.Query().Get("blog_id"))
	if err != nil {
		http.Error(w, "Invalid blog ID", http.StatusBadRequest)
		return
	}

	// Query the database for all comments for the specified blog post.
	comments := []model.Comment{}
	if err := db.Where("blog_id = ?", blogId).Find(&comments).Error; err != nil {
		http.Error(w, "Error retrieving comments", http.StatusInternalServerError)
		return
	}

	// Convert the comments to JSON and write them to the response.
	jsonBytes, err := json.Marshal(comments)
	if err != nil {
		http.Error(w, "Error converting comments to JSON", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonBytes)
}
