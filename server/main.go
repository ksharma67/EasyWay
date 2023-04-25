// The main package is the entry point for the EasyWay server application
package main
import (
	// The fmt package is used for printing to the console
	"fmt"
	// The app package contains the core logic for the server
	"github.com/ksharma67/EasyWay/server/app"
	// The config package contains the configuration for the server
	"github.com/ksharma67/EasyWay/server/config"
)
// The config package contains the configuration for the server
func main() {
	// Get the configuration for the server
	config := config.GetConfig()
	// Create a new instance of the app with the given configuration
	app := &app.App{}
	app.Initialize(config)
	// Migrate the database schema to ensure it is up-to-date
	app.DBMigrate()
	// Print a message indicating the server is running
	fmt.Println("Working server on port:3000")
	// Start the server on the specified port
	app.Run(":3000")
}
