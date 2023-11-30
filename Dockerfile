# Gunakan image yang sesuai dengan kebutuhan aplikasi Anda sebagai base image
FROM ubuntu:latest

# Salin file-file ke dalam image
COPY gastro_fix.js /app/gastro_fix.js
COPY gastro_style.css /app/gastro_style.css
COPY gastro.html /app/gastro.html

# Tentukan direktori kerja di dalam container
WORKDIR /app