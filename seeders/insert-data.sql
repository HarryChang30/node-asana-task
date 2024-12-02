INSERT INTO public."comments"
(id, task_id, description, attachment_url, created_at, updated_at)
VALUES(3, 1, 'Hey, Is there any clarification of the tasks ??', '', '2024-11-30 21:12:25.101', '2024-11-30 21:12:25.101');
INSERT INTO public."comments"
(id, task_id, description, attachment_url, created_at, updated_at)
VALUES(4, 1, 'Hey, Is there any clarification of the tasks ??', '', '2024-12-01 17:29:06.071', '2024-12-01 17:29:06.071');

INSERT INTO public.projects
(id, "name", created_at, updated_at)
VALUES(2, 'Software Engineering Project', '2024-11-27 21:06:43.817', '2024-11-27 21:06:43.817');
INSERT INTO public.projects
(id, "name", created_at, updated_at)
VALUES(3, 'Data Analytics Projects', '2024-12-01 16:34:36.129', '2024-12-01 16:34:36.129');
INSERT INTO public.projects
(id, "name", created_at, updated_at)
VALUES(4, 'Unit Testing Projects', '2024-12-02 16:41:44.822', '2024-12-02 16:41:44.822');

INSERT INTO public.tasks
(id, project_id, due_date, title, description, priority, status, created_at, updated_at, user_id, attachment_url)
VALUES(1, 2, '2024-11-30 07:00:00.000', 'This is the first task of software engineering', 'description of software engineering', 'MEDIUM'::public."enum_tasks_priority", 'TO-DO'::public."enum_tasks_status", '2024-11-30 20:29:54.952', '2024-11-30 20:43:48.285', '50f5ade2-e055-4bd0-9e16-9bf467d47a17'::uuid, NULL);

INSERT INTO public.team_groups
(id, team_id, user_id, created_at, updated_at)
VALUES(1, 2, '50f5ade2-e055-4bd0-9e16-9bf467d47a17'::uuid, '2024-12-01 16:23:18.547', '2024-12-01 16:23:18.547');
INSERT INTO public.team_groups
(id, team_id, user_id, created_at, updated_at)
VALUES(2, 3, '6a926226-ab7e-430b-9eb3-4ff4bfe6c379'::uuid, '2024-12-01 17:17:02.852', '2024-12-01 17:17:02.852');

INSERT INTO public.team_projects
(id, team_id, project_id, created_at, updated_at)
VALUES(1, 2, 2, '2024-12-01 16:23:49.298', '2024-12-01 16:23:49.298');
INSERT INTO public.team_projects
(id, team_id, project_id, created_at, updated_at)
VALUES(5, 3, 3, '2024-12-01 17:25:25.773', '2024-12-01 17:25:25.773');

INSERT INTO public.teams
(id, "name", created_at, updated_at)
VALUES(2, 'Engineering Team', '2024-12-01 16:07:11.338', '2024-12-01 16:07:11.338');
INSERT INTO public.teams
(id, "name", created_at, updated_at)
VALUES(3, 'Marketing Team', '2024-12-01 16:07:19.916', '2024-12-01 16:07:19.916');
INSERT INTO public.teams
(id, "name", created_at, updated_at)
VALUES(4, 'Data and Analytics Team', '2024-12-01 16:13:26.657', '2024-12-01 16:13:26.657');
INSERT INTO public.teams
(id, "name", created_at, updated_at)
VALUES(5, 'Customer Experience Team', '2024-12-01 16:26:33.396', '2024-12-01 16:26:33.396');

INSERT INTO public.users
(id, username, "password", "name", created_at, updated_at)
VALUES('50f5ade2-e055-4bd0-9e16-9bf467d47a17'::uuid, 'harrychang', 'harry123', 'Harry', '2024-11-27 20:58:39.621', '2024-11-27 20:58:39.621');
INSERT INTO public.users
(id, username, "password", "name", created_at, updated_at)
VALUES('6a926226-ab7e-430b-9eb3-4ff4bfe6c379'::uuid, 'harrychang12', 'harry123', 'Harry', '2024-12-01 17:13:24.590', '2024-12-01 17:13:24.590');