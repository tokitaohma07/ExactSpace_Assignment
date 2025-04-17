# Steps
1. Scrape data from any given URL using Node.js + Puppeteer.

2. Serve the scraped data using a Flask API.

3. Use a multi-stage Docker build to keep the image lightweight.

4. Deployed on AWS EC2 Instance for execution due to local system limitations.


# Files
scrape.js – Scrapes title, heading, content, and saves scraped_data.json & screenshot.png.

server.py – Flask server to serve scraped data on /.

Dockerfile – Multi-stage build.

package.json – Node.js dependencies.

requirements.txt – Python dependencies.

# Created an Ec2 Instance and connect SSH and install docker packages

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo usermod -aG docker ubuntu

# Build and Run Docker Image

```bash
docker build --build-arg SCRAPE_URL=https://example.com -t web-scraper .
docker run -p 5000:5000 web-scraper


sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo usermod -aG docker ubuntu

# Build and Run Docker Image

```bash
docker build --build-arg SCRAPE_URL=https://example.com -t web-scraper .
docker run -p 5000:5000 web-scraper
