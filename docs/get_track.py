import matplotlib.pyplot as plt
import fastf1
from fastf1 import plotting

# Enable FastF1 built-in matplotlib color styling
plotting.setup_mpl()

# Setup local caching to optimize future data loading speeds
fastf1.Cache.enable_cache('path/to/cache/folder') 

# Load a specific F1 session (e.g., 2025 British Grand Prix Qualifying)
session = fastf1.get_session(2025, 'Silverstone', 'Q')
session.load()

# Pick the fastest overall lap of the session
fastest_lap = session.laps.pick_fastest()

# Extract telemetry car data (includes X, Y spatial coordinates)
telemetry = fastest_lap.get_telemetry()

# Isolate the X and Y coordinates 
x = telemetry['X']
y = telemetry['Y']

# Create the plot
fig, ax = plt.subplots(figsize=(10, 10))

# Plot the coordinates as a single line mapping the track
ax.plot(x, y, color='white', linewidth=3)

# Style and clean up the chart
ax.set_title(f"{session.event['EventName']} {session.event['EventDate'].year} - Track Layout")
ax.set_xlabel('X Coordinate')
ax.set_ylabel('Y Coordinate')
ax.axis('equal') # Keeps the aspect ratio proportional

plt.show()
