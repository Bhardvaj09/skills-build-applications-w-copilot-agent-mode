import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models';

const router = Router();

router.get(['/api/users', '/api/users/'], async (_req, res) => {
  const users = await User.find().lean();
  res.json(users);
});

router.post(['/api/users', '/api/users/'], async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

router.get(['/api/teams', '/api/teams/'], async (_req, res) => {
  const teams = await Team.find().populate('members').lean();
  res.json(teams);
});

router.post(['/api/teams', '/api/teams/'], async (req, res) => {
  const team = await Team.create(req.body);
  res.status(201).json(team);
});

router.get(['/api/activities', '/api/activities/'], async (_req, res) => {
  const activities = await Activity.find().lean();
  res.json(activities);
});

router.post(['/api/activities', '/api/activities/'], async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json(activity);
});

router.get(['/api/leaderboard', '/api/leaderboard/'], async (_req, res) => {
  const entries = await LeaderboardEntry.find().sort({ score: -1 }).lean();
  res.json(entries);
});

router.post(['/api/leaderboard', '/api/leaderboard/'], async (req, res) => {
  const entry = await LeaderboardEntry.create(req.body);
  res.status(201).json(entry);
});

router.get(['/api/workouts', '/api/workouts/'], async (_req, res) => {
  const workouts = await Workout.find().lean();
  res.json(workouts);
});

router.post(['/api/workouts', '/api/workouts/'], async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json(workout);
});

export default router;
