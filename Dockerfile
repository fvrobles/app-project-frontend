# Serve the application with nginx
FROM nginx:1.19.0-alpine as serve
COPY ./dist/helloworld/browser /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
