const express = require("express");
const app = express();
const morgan = require("morgan");
const CareersRouter = require("./routes/careers.routes");
const SubjectsRouter = require("./routes/subjects.routes");
const CoursesRouter = require("./routes/courses.routes");
const CuatrimestreRouter = require("./routes/cuatrimestre.routes");

const port = 4000;
app.set("port", port);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/carreras", CareersRouter);
app.use("/cursos", CoursesRouter);
app.use("/materias", SubjectsRouter);
app.use("/cuatrimestre", CuatrimestreRouter);

app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});
