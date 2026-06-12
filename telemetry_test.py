import fastf1

session = fastf1.get_session(2025, "Monaco", "Q")
session.load()

print(session.event['EventName'])