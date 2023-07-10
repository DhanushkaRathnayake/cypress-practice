pipeline{
    agent any

    parameters{
        string(name:'SPEC', defaultValue:"cypress/integration/**/**", description:"Enter the scripts that you want to execute")
        choice(name:'BROWSER',choices:['chrome','edge','firefox'], description:"Choice the browser")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            echo "Building the application"
        }
        stage('Testing'){
            steps{
                bat "npn i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){
            echo "Deploying the application"
        }

        post{
            always{
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}