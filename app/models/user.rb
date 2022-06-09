class User < ApplicationRecord
    has_many :workouts 
    has_many :exercises
end
