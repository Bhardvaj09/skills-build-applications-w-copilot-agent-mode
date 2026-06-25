import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

// Seed the octofit_db database with test data
async function seed() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB for seeding');

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const users = await User.insertMany([
    { name: 'Ava Patel', email: 'ava@example.com', role: 'captain' },
    { name: 'Marcus Lee', email: 'marcus@example.com', role: 'member' },
    { name: 'Nia Brooks', email: 'nia@example.com', role: 'coach' },
  ]);

  const teams = await Team.insertMany([
    {
      name: 'River Runners',
      sport: 'Running',
      members: [users[0]._id, users[1]._id],
    },
    {
      name: 'Peak Cyclists',
      sport: 'Cycling',
      members: [users[2]._id],
    },
  ]);

  await Activity.insertMany([
    { name: 'Morning Run', duration: 35, completed: true },
    { name: 'Yoga Flow', duration: 25, completed: false },
    { name: 'Strength Circuit', duration: 45, completed: true },
  ]);

  await LeaderboardEntry.insertMany([
    { username: 'ava_p', score: 980, rank: 1 },
    { username: 'marcus_l', score: 910, rank: 2 },
    { username: 'nia_b', score: 870, rank: 3 },
  ]);

  await Workout.insertMany([
    { title: 'HIIT Cardio', difficulty: 'intermediate', duration: 30 },
    { title: 'Core Stability', difficulty: 'beginner', duration: 20 },
    { title: 'Endurance Ride', difficulty: 'advanced', duration: 45 },
  ]);

  console.log('Seeded users, teams, activities, leaderboard, and workouts');
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error('Seeding failed', error);
  process.exit(1);
});
