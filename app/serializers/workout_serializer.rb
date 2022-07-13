class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :exercise_ids
  has_many :exercises
end
