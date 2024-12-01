const express = require('express');
const multer = require('multer');
const router = express.Router();


const UserHandler = require('src/interfaces/http/Users');
const ProjectHandler = require('src/interfaces/http/Projects');
const TeamHandler = require('src/interfaces/http/Teams');
const TaskHandler = require('src/interfaces/http/Tasks');
const CommentHandler = require('src/interfaces/http/Comments');

// Upload
const UploadHandler = require('src/interfaces/http/Uploads');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    const fileStore = file.fieldname + '-' + Date.now() + '-' + file.originalname;
    req.store_path = 'public/uploads/' + fileStore;
    cb(null, fileStore);
  }
});

const upload = multer({ storage: storage });

// Validate Middleware
const ValidateToken = require('src/interfaces/middleware/ValidateToken');

// List of Asana APIs

// Users
router.post('/v1/users', UserHandler.create);

// Login
router.post('/v1/login', UserHandler.login);

// Projects
router.get('/v1/projects/:id', ValidateToken.validate, ProjectHandler.get);
router.post('/v1/projects', ValidateToken.validate, ProjectHandler.create);
router.put('/v1/projects/:id', ValidateToken.validate, ProjectHandler.update);
router.delete('/v1/projects/:id', ValidateToken.validate, ProjectHandler.delete);

// Teams
router.post('/v1/teams', ValidateToken.validate, TeamHandler.create);
router.post('/v1/team-groups', ValidateToken.validate, TeamHandler.assign);
router.post('/v1/team-projects', ValidateToken.validate, TeamHandler.assign_project);

// Tasks
router.post('/v1/tasks', ValidateToken.validate, TaskHandler.create);
router.put('/v1/tasks/:id', ValidateToken.validate, TaskHandler.update);
router.get('/v1/tasks/:id', ValidateToken.validate, TaskHandler.getById);
router.get('/v1/tasks/projects/:project_id', ValidateToken.validate, TaskHandler.getAllTasksByProjectId);

// Comments
router.post('/v1/comments', ValidateToken.validate, CommentHandler.create);
router.get('/v1/comments/tasks/:task_id', ValidateToken.validate, CommentHandler.getCommentsByTaskId);

// Upload Attachment
router.post('/v1/upload/attachment', ValidateToken.validate, upload.single('file'), UploadHandler.upload);

// Health check server
router.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is healthy' });
});

module.exports = router;