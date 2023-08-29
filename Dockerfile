FROM webdevops/nginx:alpine
RUN apk add tzdata && cp /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime && echo "Asia/Ho_Chi_Minh" >  /etc/timezone
COPY /dist /app
COPY /nginx /opt/docker/etc/nginx
EXPOSE 80
WORKDIR /app
