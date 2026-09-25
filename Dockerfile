FROM node:23-bookworm-slim
RUN yes | npm install -g pnpm && apt update 

RUN apt-get update -y && apt-get install -y ca-certificates curl build-essential

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | \
    sh -s -- --default-toolchain stable --profile minimal --target x86_64-unknown-linux-gnu -y

ENV PATH="/root/.cargo/bin:${PATH}"

RUN cargo install wasm-pack
