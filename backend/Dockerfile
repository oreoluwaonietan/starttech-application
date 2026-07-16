FROM golang:1.25-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o api ./cmd/api

FROM alpine:latest
RUN apk --no-cache add curl
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=builder /app/api .
RUN chown appuser:appgroup /app/api
USER appuser
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s \
  CMD curl -f http://localhost:8080/api/v1/health || exit 1
CMD ["./api"]
