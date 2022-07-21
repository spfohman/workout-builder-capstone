class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :exercise_ids, :likes
  has_many :exercises
end
