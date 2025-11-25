pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/21CSE49/Suja-practice-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t suja/myapp:latest .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                bat "docker login -u suja350 -p dckr_pat_LjyNsl45sTeQsXH6Opyayt2mLUg"
            }
        }

        stage('Push to DockerHub') {
            steps {
                bat "docker push suja/myapp:latest"
            }
        }
    }
}
