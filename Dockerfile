# Production Container Definition for finance-tracker-nextjs-ts-v45
FROM alpine:3.19
RUN apk add --no-cache bash curl
WORKDIR /app
COPY . /app
CMD ["echo", "finance-tracker-nextjs-ts-v45 container active"]
