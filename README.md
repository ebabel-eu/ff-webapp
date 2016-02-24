#FF React Webapp

## Local Development:

#### BUILD

```
npm install
npm run build
```

#### DEVELOPMENT START

```
npm install
npm run dev
```

## Docker:

#### BUILD
```
docker build -t react-tutorials .
```

#### PRODUCTION START
```
docker run -p 8080:8080 --rm -it -e NODE_ENV=production react-tutorials
```
