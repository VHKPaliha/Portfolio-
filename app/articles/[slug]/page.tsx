import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This is a mock function to simulate fetching article data
// In a real application, you would fetch this data from an API or database
function getArticleData(slug: string) {
  const articles = {
    "kafka-golang": {
      title: "The simplest example is kafka + golang",
      description:
        "This article presents a simple way to implement a microservice architecture using Kafka, Golang and Docker.",
      date: "March 15, 2023",
      readTime: "8 min read",
      content: `
        <p>Microservices architecture has become increasingly popular for building scalable and maintainable applications. In this article, I'll show you a simple way to implement a microservice architecture using Kafka, Golang, and Docker.</p>
        
        <h2>What is Kafka?</h2>
        <p>Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.</p>
        
        <h2>Why Golang?</h2>
        <p>Go (or Golang) is a statically typed, compiled programming language designed at Google. It's known for its simplicity, efficiency, and excellent support for concurrency, making it an ideal choice for microservices.</p>
        
        <h2>Setting Up the Environment</h2>
        <p>First, let's set up our development environment using Docker Compose. This will allow us to run Kafka and Zookeeper containers easily.</p>
        
        <pre><code>
version: '3'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - 22181:2181
  
  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - 29092:29092
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092,PLAINTEXT_HOST://localhost:29092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
        </code></pre>
        
        <h2>Creating the Producer Service</h2>
        <p>Now, let's create a simple producer service in Golang that will send messages to a Kafka topic.</p>
        
        <pre><code>
package main

import (
    "context"
    "fmt"
    "log"
    "os"
    "time"

    "github.com/segmentio/kafka-go"
)

func main() {
    // Create a new context
    ctx := context.Background()
    
    // Create a new Kafka writer
    writer := kafka-go.NewWriter(kafka-go.WriterConfig{
        Brokers: []string{"localhost:29092"},
        Topic:   "messages",
    })
    
    // Send messages every second
    for i := 0; ; i++ {
        message := fmt.Sprintf("Message %d", i)
        err := writer.WriteMessages(ctx, kafka-go.Message{
            Value: []byte(message),
        })
        
        if err != nil {
            log.Fatal("Failed to write message:", err)
        }
        
        fmt.Println("Sent:", message)
        time.Sleep(time.Second)
    }
}
        </code></pre>
        
        <h2>Creating the Consumer Service</h2>
        <p>Next, let's create a consumer service that will read messages from the Kafka topic.</p>
        
        <pre><code>
package main

import (
    "context"
    "fmt"
    "log"

    "github.com/segmentio/kafka-go"
)

func main() {
    // Create a new context
    ctx := context.Background()
    
    // Create a new Kafka reader
    reader := kafka-go.NewReader(kafka-go.ReaderConfig{
        Brokers: []string{"localhost:29092"},
        Topic:   "messages",
        GroupID: "consumer-group-1",
    })
    
    // Read messages
    for {
        message, err := reader.ReadMessage(ctx)
        if err != nil {
            log.Fatal("Failed to read message:", err)
        }
        
        fmt.Printf("Received: %s\\n", string(message.Value))
    }
}
        </code></pre>
        
        <h2>Dockerizing the Services</h2>
        <p>Finally, let's create Dockerfiles for our producer and consumer services.</p>
        
        <p>Producer Dockerfile:</p>
        <pre><code>
FROM golang:1.17-alpine

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY producer.go .

RUN go build -o producer producer.go

CMD ["./producer"]
        </code></pre>
        
        <p>Consumer Dockerfile:</p>
        <pre><code>
FROM golang:1.17-alpine

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY consumer.go .

RUN go build -o consumer consumer.go

CMD ["./consumer"]
        </code></pre>
        
        <h2>Conclusion</h2>
        <p>In this article, we've seen how to implement a simple microservice architecture using Kafka and Golang. This approach provides a scalable and reliable way to build distributed systems.</p>
        
        <p>The complete code for this example is available on my GitHub repository. Feel free to clone it and experiment with it yourself!</p>
      `,
    },
    "sample-article": {
      title: "Sample Article Title",
      description: "This is a sample article placeholder.",
      date: "January 1, 2023",
      readTime: "5 min read",
      content: `
        <p>This is a sample article placeholder. No actual content is available for this article.</p>
        
        <h2>Sample Heading</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
        Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.</p>
        
        <h2>Another Heading</h2>
        <p>Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
        congue enim, ut porta lorem lacinia consectetur.</p>
        
        <ul>
          <li>Sample list item 1</li>
          <li>Sample list item 2</li>
          <li>Sample list item 3</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>This is a placeholder conclusion for the sample article.</p>
      `,
    },
    // Add more articles as needed
  }

  return articles[slug as keyof typeof articles]
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="pt-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto py-20">
            <h1 className="text-4xl font-mono font-bold mb-6">Article Not Found</h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link href="/articles" className="flex items-center text-white hover:text-gray-300 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-gray-light">
      <Navbar />

      <main className="pt-20">
        <article className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/articles"
              className="flex items-center text-gray-medium hover:text-gray-light transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>

            <h1 className="text-3xl md:text-4xl font-mono font-bold mb-4">{article.title}</h1>

            <div className="flex items-center text-gray-medium text-sm mb-8">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>

            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
