package main

import (
	"fmt"
	"log"
	"mime"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	mediaType, params, err := mime.ParseMediaType(request.Headers["Content-Type"])
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("params: ", params)
	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       string(mediaType),
	}, nil
}

func main() {
	lambda.Start(handler)
}
