import fastf1
import json

session = fastf1.get_session(2025, "Monaco", "Q")
session.load()

laps = session.laps[["Driver", "LapTime"]]

data = laps.to_dict(orient="records")

with open("laps.json", "w") as f:
    json.dump(data, f)