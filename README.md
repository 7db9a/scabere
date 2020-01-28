## My Rust EOS Dev Environment (Naive)

It uses eos v1 and installs eos software binaries instead of building from source.

```
git clone https://github.com/7db9a/rust-eos-dev-env-starter your-eos-project
cd docker your-eos-project/docker
docker build -t rust-eos-dev:latest .
docker volume create --name=nodeos-data-volume
docker volume create --name=keosd-data-volume
docker compose up
```
It sets up [eosio-rust](https://github.com/sagan-software/eosio-rust) for contract development and [eoslime](https://github.com/LimeChain/eoslime) (nodejs) for tests. Nodeos and keos are launched in their own containers.

***Don't deploy production code using this environment. Don't hold actual tokens in a wallet made using this environment. At the moment, this solution is naive: for example, the EOSIO software for this environment is installed from binaries and isn't built from source (see Dockerfile).***

**create wallet**

`./dev.sh wallet-create`

Add the password to the `docker/eos.env`. The pub and priv key in the file is for development.

**restart container services**

`docker-compose stop && docker-compose up --force-recreate`


#### Build, set, and test

To build the rust code, deploy it locally, and run tests:

`./dev.sh run`

The commands broken down individually:

**build code**

`./dev.sh build`

**set code**

`./dev.sh set`

**test code**

`./dev.sh test`

`dev.sh` is very basic and not generalized. Feel free to modify it or make your own script, or just run the actual underlying commands.
