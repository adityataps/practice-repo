import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import *

training_data_df = pd.read_csv("sales_data_training_scaled.csv")

# Obtaining every single column except for target column (total earnings)
X = training_data_df.drop('total_earnings', axis=1).values

# Obtaining target column (total earnings)
Y = training_data_df[['total_earnings']].values

# Define the model
model = Sequential()
model.add(Dense(50, input_dim=9, activation='relu'))
model.add(Dense(100, activation='relu'))
model.add(Dense(50, activation='relu'))
model.add(Dense(1, activation='linear'))
model.compile(loss="mean_squared_error", optimizer="adam")