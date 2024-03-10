# Sử dụng image chính thức của Ubuntu làm base image
FROM ubuntu:latest

# Cài đặt MySQL và các gói liên quan
RUN apt-get update && apt-get install -y mysql-server

# Set bind address to 0.0.0.0
RUN sed -i 's/bind-address\t\t= 127.0.0.1/bind-address\t\t= 0.0.0.0/' /etc/mysql/mysql.conf.d/mysqld.cnf

# Khởi động MySQL service
RUN service mysql start

# Copy SQL file vào thư mục docker-entrypoint-initdb.d để tự động thực thi khi container khởi chạy
COPY bovip.sql /docker-entrypoint-initdb.d/

# Thiết lập một số cài đặt môi trường cho MySQL (tuỳ chọn)
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=bovip
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root

# Expose MySQL port
EXPOSE 3306

# CMD để MySQL service được chạy khi container được khởi động
CMD ["mysqld"]
