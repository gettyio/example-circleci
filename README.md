# example-circleci

#### Local CircleCI cli

Quick installation method:

`$ curl -fLSs https://circle.ci/cli | bash`

##### Usage

Validation:

`$ circleci config validate`

Job invoking:

`$ circleci local execute --branch mybranch --job myjob`

#### First Job

As a first job task, only dependencies downloading and distribution folder building will be done, simple as that.

Snippet, whole code is available at [.circleci/config.yml](.circleci/config.yml):
```
# downloads dependencies
- run: yarn

# builds distribuion folder
- run: yarn build
```

as i named it `build` and my current branch is `develop`, the local execution will be something like this:

`$ circleci local execute --branch develop --job build`
