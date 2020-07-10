package main

import (
	"fmt"
	"mime"
	"strconv"
	"strings"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func splitMediaType(m string) (string, string) {
	s := strings.SplitN(m, "/", 2)
	if len(s) == 0 {
		return "", ""
	} else if len(s) == 1 {
		return s[0], ""
	}
	return s[0], s[1]
}

func equalsOrEndsWith(a, b string) bool {
	return a == b || strings.HasSuffix(a, "+"+b)
}

func isBase64(r events.APIGatewayProxyRequest) bool {
	completeMediaType, _, err := mime.ParseMediaType(r.Headers["content-type"])
	if err != nil {
		return false
	}

	mediaType, subType := splitMediaType(completeMediaType)
	fmt.Println(mediaType)
	fmt.Println(subType)
	if mediaType == "text" {
		return false
	}
	if mediaType == "application" {
		return !equalsOrEndsWith(subType, "json") &&
			!equalsOrEndsWith(subType, "xml") &&
			!equalsOrEndsWith(subType, "javascript")
	}
	return true
}

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	var o = isBase64(request)

	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body: "isBase64: " + strconv.FormatBool(o) + "\n" +
			"IsBase64Encoded: " + strconv.FormatBool(request.IsBase64Encoded) + "\n",
	}, nil
}

func main() {
	lambda.Start(handler)
}
