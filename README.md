## What is it?

This project is a interface to simplify interacting with an AI using PDF, Web or General Chats. With this project a user can submit a pdf or url and question something specific about the file.

## Showcase

https://github.com/user-attachments/assets/6331d5c7-f187-42d0-80b3-bd9a8d4e9383

### Packages

To handle the communication AI communication I'm using [https://www.langchain.com/](@langchain) and to store the file/url information, [https://www.trychroma.com/](chromadb). The project is built on top of [https://nextjs.org/](next).

### Running

If you want to give it a try make sure you setup your .env file following this schema. There's a docker-compose file that should simplify running the chromadb.
```
OPENAI_API_KEY=
CHROMA_HOST=
```
