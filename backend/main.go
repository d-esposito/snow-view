package main

import (
	"fmt"
	"log"
	"net/http"
)

func request_handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello world")
}

func main() {
	http.HandleFunc("/", request_handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}