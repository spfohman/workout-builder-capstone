# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create(username: 'Sarah', password_digest: 'password')
user2 = User.create(username: 'Oscar', password_digest: 'password')
user3 = User.create(username: 'Abby', password_digest: 'password')

crunches = Exercise.create(name: "crunches", rep_count: 30, description: "With fingers clasped behind your head raise you head off the floor about half way up. Lower back down, repeat." )
arm_curls = Exercise.create(name: "arm curls", rep_count: 15, description: "Use light to mid weight dumbells. With palm facing up, and elbow stationary, raise your hand up towards your shoulder. Lower and repeat for reps.")
squats = Exercise.create(name: "squats", rep_count: 15, description: "With your feet placed hip width apart, lower down like you are sitting into a chair, then stand back up. Repeat for reps.")

workout1 = Workout.create(name: "workout1", desc: "New workout")

WorkoutExercise.create(workout_id: 1, exercise_id: 1)