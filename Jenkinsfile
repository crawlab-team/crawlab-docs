pipeline {
    agent {
        node {
            label 'crawlab'
        }
    }

    stages {
        stage('Setup') {
            steps {
                echo "Running setup..."
            }
        }
        stage('Build') {
            steps {
                echo "Building..."
                sh """
                node /home/yeqing/.nvm/versions/node/v8.12.0/lib/node_modules/npm install -g gitbook-cli --registry=https://registry.npm.taobao.org
                node /home/yeqing/.nvm/versions/node/v8.12.0/lib/node_modules/gitbook build . /opt/crawlab/docs
                """
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh """
                docker rm -f crawlab-docs
                docker run --name crawlab-docs -p 8100:80 -v /opt/crawlab/docs:/usr/share/nginx/html:ro -d nginx:alpine
                """
            }
        }
        stage('Cleanup') {
            steps {
                echo 'Cleanup...'
                sh """
                docker rmi -f `docker images | grep '<none>' | grep -v IMAGE | awk '{ print \$3 }' | xargs`
                """
            }
        }
    }
}