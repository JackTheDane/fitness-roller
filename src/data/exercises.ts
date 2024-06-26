import {
  EquipmentType,
  Exercise,
  ExerciseType,
  MajorMuscle,
  MinorMuscle,
} from "./types";

export const EXERCISES = [
  {
    name: "Arnold Press",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Bicep", "Shoulders"],
    example: "arnold-press.gif",
  },
  {
    name: "Bicep Curl",
    equipmentTypes: ["Bar", "Dumbbells", "Cable"],
    exerciseTypes: ["Weight", "Machine"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Bicep"],
    example: "bicep-curl.gif",
    notes:
      "Don't use momentum. Make sure the movement is coming from the bottom half of your arm not your shoulder moving the weight.",
  },
  {
    name: "Bicycle Crunch",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "bicycle-crunch.gif",
    notes:
      'The lower the "straight" leg is to the ground the more challenging this exercise is.',
    modifications:
      "Easier: Move Slower, Legs higher in the air\nHarder: Keep shoulder blades off the ground entire time",
  },
  {
    name: "Bounds",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio", "Laps"],
    majorMuscles: ["Full Body", "Legs"],
    minorMuscles: ["Outer Thigh", "Glutes"],
    example: "bounds.gif",
    notes: "Do laps across the room of these.",
    modifications:
      "Easier: Don't jump as high/far\nHarder: Touch the ground with your opposite hand after each jump",
  },
  {
    name: "Box Jumps",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "box-jumps.gif",
    notes:
      "Don't be afraid, you can jump higher than you think. Just try it once.",
    modifications:
      "Easier: Lower the height of the box and work up\nHarder: Jump Faster and higher boxes",
  },
  {
    name: "Box Toe Touch",
    equipmentTypes: ["Platform"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes"],
    example: "box-toe-touch.gif",

    modifications:
      "Easier: Don't use a box, just practice toe touch without\nHarder: Increase Speed",
  },
  {
    name: "Broad Jump",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo", "Laps", "Cardio"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes"],
    example: "broad-jump.gif",
    notes:
      "You can do these for speed, or for distance. Speed = Cardio, Distance/Height = Plyo",
  },
  {
    name: "Bulgarian Split Squat",
    equipmentTypes: ["Bar", "Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Hamstrings", "Quads"],
    example: "bulgarian-split-squat.gif",
    notes: "Use Single 30LB Dumbbell or an Olympic Bar",
  },
  {
    name: "Burpee",
    equipmentTypes: ["Body Weight", "Bosu Ball"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "burpee.gif",
    notes:
      "Option with half Bosu, Pushup Optional. Make sure you don't round your back",
    modifications:
      "Easier: Don't Jump after, and break down motion squat, step legs back and no pushup\nHarder: Speed",
  },
  {
    name: "Burpee Broad Jump",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo", "Laps"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "burpee-broad-jump.gif",
    notes: "Do laps of these across the room if you have the space.",
  },
  {
    name: "Butt Kickers",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes"],
    example: "butt-kickers.gif",
    notes: "Do it like you mean it, or this exercise is a waste of time.",
    modifications: "Harder: Hold weights, move faster",
  },
  {
    name: "Calf Raise",
    equipmentTypes: ["Dumbbells", "Machine"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Calves"],
    example: "calf-raise.jpg",
    notes:
      "Play around with foot placement, some gyms also have machines for this",
  },
  {
    name: "Chest Press",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Chest"],
    example: "chest-press.gif",
    notes: "You can do this lying on the ground, or on a bench top",
  },
  {
    name: "Close to Wide Grip Burnout",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Bicep"],
    example: "close-to-wide-grip-burnout.gif",
  },
  {
    name: "Compass Jump",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "compass-jump.gif",
    notes: "These can also be done with both feet on the ground.",
    modifications:
      "Easier: Both feet on the ground, or stepping instead of jumping",
  },
  {
    name: "Crab Crawl",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio", "Laps"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "crab-crawl.gif",
  },
  {
    name: "Curtsey Lunges",
    equipmentTypes: ["Dumbbells", "Bar"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Inner Thigh"],
    example: "curtsey-lunges.gif",
  },
  {
    name: "Deficit Squat",
    equipmentTypes: ["Platform"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes"],
    example: "deficit-squat.png",
  },
  {
    name: "Donkey Kick",
    equipmentTypes: ["Dumbbells", "Band", "Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes"],
    example: "donkey-kick.gif",

    modifications: "Easier: Don't use weights\nHarder: Use heavy weights",
  },
  {
    name: "Fire Hydrant",
    equipmentTypes: ["Band", "Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes", "Outer Thigh"],
    example: "fire-hydrant.gif",

    modifications: "Harder: Place a weight behind your kneecap",
  },
  {
    name: "Flutter Kick",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "flutter-kick.gif",
    notes:
      "Her neck looks like its undergoing some serious strain. Feel free to leave yours on the ground.",
  },
  {
    name: "Frogger",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "frogger.gif",

    modifications: "Easier: Step Back instead of jumping back\nHarder: Burpee",
  },
  {
    name: "Glute Bridge",
    equipmentTypes: ["Band", "Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes"],
    example: "glute-bridge.gif",
    notes: "If using weights, place in hip crease",
  },
  {
    name: "Glute Bridge March",
    equipmentTypes: ["Band", "Platform"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Hamstrings"],
    example: "glute-bridge-march.gif",
  },
  {
    name: "Goblet Squat",
    equipmentTypes: ["Kettlebells", "Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes", "Quads"],
    example: "goblet-squat.jpg",
  },
  {
    name: "Halo",
    equipmentTypes: ["Kettlebells", "Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Shoulders", "Tricep"],
    example: "halo.gif",
  },
  {
    name: "Heart Pump",
    equipmentTypes: ["Kettlebells", "Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Bicep", "Chest"],
    example: "heart-pump.gif",
  },
  {
    name: "High Knees",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "high-knees.gif",
    notes:
      "My coach always says, your high knees tells a lot about your dedication. Do yours like the guy in the gif. Get your knees up or don't bother!",
    modifications: "Easier: Running on the spot\nHarder: Speed",
  },
  {
    name: "Jump Lunges",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo", "Cardio"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes", "Quads"],
    example: "jump-lunges.gif",

    modifications:
      "Easier: Split Jump, so don't go all the way down into a lunge. Or alternate between regular lunges and lunge jumps",
  },
  {
    name: "Jump Rope",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "jump-rope.gif",

    modifications: "Harder: Single Leg",
  },
  {
    name: "Jumping Jack Push Press",
    equipmentTypes: ["Medicine Ball"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "jumping-jack-push-press.gif",

    modifications: "Easier: Remove the weights, step out instead of jump",
  },
  {
    name: "Jumping Jacks",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "jumping-jacks.gif",
    notes:
      "Go faster than the gif lady. I chose her because she has good form, your hand should always touch at the top",
    modifications: "Easier: Step out instead of jump",
  },
  {
    name: "Kettlebell Swing",
    equipmentTypes: ["Kettlebells", "Dumbbells"],
    exerciseTypes: ["Cardio", "Weight"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "kettlebell-swing.gif",
    notes:
      'When I do these I usually keep my hand close to my body and let my hips "push" the movement. If you\'d like to experiment, you can use a dumbbell instead',
  },
  {
    name: "Knee Drive",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "knee-drive.gif",

    modifications:
      "Harder: Single-leg jump in the air after the knee drive, hold weights",
  },
  {
    name: "Lateral Band Walk",
    equipmentTypes: ["Band"],
    exerciseTypes: ["Cardio", "Laps"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Outer Thigh"],
    example: "lateral-band-walk.gif",
  },
  {
    name: "Leg Pull Apart",
    equipmentTypes: ["Band"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs", "Back"],
    minorMuscles: ["Outer Thigh"],
    example: "leg-pull-apart.gif",
  },
  {
    name: "Leg Raise",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "leg-raise.jpg",
    notes: "Hold onto something heavy",
  },
  {
    name: "Literally Just Jumping",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: ["Calves", "Glutes"],
    example: "literally-just-jumping.gif",
    notes:
      "No good gifs for this, keep core tight, minimize time on the ground and jump up and down.",
  },
  {
    name: "Lying Leg Raises",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "lying-leg-raises.gif",
  },
  {
    name: "Military Plank",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body", "Arms"],
    minorMuscles: ["Shoulders"],
    example: "military-plank.gif",

    modifications: "Easier: Do this from your knees",
  },
  {
    name: "Monkey Jump",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo", "Cardio"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "monkey-jump.gif",

    modifications:
      'Harder: Do a "literally just jumping" between your monkey jumps',
  },
  {
    name: "Mountain Climbers",
    equipmentTypes: ["Body Weight", "Bosu Ball"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Core", "Full Body"],
    minorMuscles: [],
    example: "mountain-climbers.gif",

    modifications: "Easier: Step in, instead of running your knees",
  },
  {
    name: "Plank",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Full Body", "Core"],
    minorMuscles: ["Chest"],
    example: "plank.jpg",

    modifications: "Easier: Go from your knees",
  },
  {
    name: "Plank Jack",
    equipmentTypes: ["Band", "Body Weight"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Full Body", "Core"],
    minorMuscles: [],
    example: "plank-jack.gif",

    modifications: "Easier: Step out, instead of jumping your knees",
  },
  {
    name: "Plank Row",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Full Body", "Back"],
    minorMuscles: [],
    example: "plank-row.gif",
  },
  {
    name: "Pushup",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Chest"],
    example: "pushup.gif",
    notes:
      "Can be done from knees, or legs. Arms parallel to your body like the dude in the gif.",
    modifications: "Easier: Go from your knees, or standing against the wall",
  },
  {
    name: "Pushup Walk",
    equipmentTypes: ["Band"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Chest"],
    example: "pushup-walk.gif",
  },
  {
    name: "Reverse Crunches",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "reverse-crunches.gif",
  },
  {
    name: "Row",
    equipmentTypes: ["Bar", "Dumbbells", "Landmine"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Back"],
    minorMuscles: [],
    example: "row.gif",
    notes: "Bar + 15LB",
  },
  {
    name: "Russian Twist",
    equipmentTypes: ["Kettlebells", "Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "russian-twist.gif",
  },
  {
    name: "Seal Jacks",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "seal-jacks.gif",
    notes:
      "Clap your hands and dance around while you do these. Makes life more fun.",
  },
  {
    name: "Shoulder Press",
    equipmentTypes: ["Bar", "Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Shoulders"],
    example: "shoulder-press.gif",
    notes: "Bar + 5LB",
  },
  {
    name: "Lateral Raise",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Lats"],
    example: "lateral-raise.gif",
  },
  {
    name: "Side Lunge",
    equipmentTypes: ["Body Weight", "Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Outer Thigh"],
    example: "side-lunge.gif",

    modifications: "Easier: no weights",
  },
  {
    name: "Side Plank",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Full Body", "Core"],
    minorMuscles: ["Oblique"],
    example: "side-plank.jpg",

    modifications: "Easier: do the movement from your knees",
  },
  {
    name: "Side Plank Dips",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: ["Oblique"],
    example: "side-plank-dips.gif",

    modifications: "Easier: do the movement from your knees",
  },
  {
    name: "Side Plank with Leg Lift",
    equipmentTypes: ["Band", "Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: ["Oblique"],
    example: "side-plank-with-leg-lift.gif",

    modifications: "Easier: do the movement from your knees",
  },
  {
    name: "Single Arm Clean and Press",
    equipmentTypes: ["Kettlebells", "Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Full Body", "Arms"],
    minorMuscles: ["Shoulders"],
    example: "single-arm-clean-and-press.gif",
    notes: "Currently using 25LB",
  },
  {
    name: "Single Leg Hip Bridge",
    equipmentTypes: ["Body Weight", "Dumbbells", "Bosu Ball"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Hamstrings"],
    example: "single-leg-hip-bridge.gif",
    notes:
      "You're wasting your time on this if you're not actually thinking about squeezing your glutes with each movement. You really need to be focused to do this.",
    modifications:
      "Easier: remove the ball and do this movement from the floor.",
  },
  {
    name: "Single Leg Squat",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes", "Quads"],
    example: "single-leg-squat.gif",
  },
  {
    name: "Situp and Throw",
    equipmentTypes: ["Medicine Ball"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "situp-and-throw.jpg",
  },
  {
    name: "Skaters",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Outer Thigh"],
    example: "skaters.gif",
    notes:
      "Lady in the gif isn't giving it 100% make sure to touch the ground between reps",
    modifications: "Easier: remove the jump\nHarder: Hold Weights",
  },
  {
    name: "Skipping",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Cardio", "Laps"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "skipping.gif",
  },
  {
    name: "Skull Crusher",
    equipmentTypes: ["Dumbbells", "Bar"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Tricep"],
    example: "skull-crusher.gif",
  },
  {
    name: "Spiderman Pushup",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms", "Core"],
    minorMuscles: ["Chest", "Oblique"],
    example: "spiderman-pushup.gif",

    modifications:
      "Easier: do a pushup from your knees, and then the spiderman movement",
  },
  {
    name: "Squat",
    equipmentTypes: ["Bar", "Dumbbells", "Body Weight", "Squat Rack", "Band"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Quads", "Glutes"],
    example: "squat.gif",
    notes: "Bar + 45LB",
    modifications: "Easier: air squat",
  },
  {
    name: "Squat Jump",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo", "Cardio"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Quads"],
    example: "squat-jump.gif",
    notes:
      "You can do these for height (plyo) or speed (cardio) and to switch them up sometimes do them with your arms clasped at the front so it's a leg-only exercise",
    modifications:
      "Easier: Just do an air squat, or alternate squat and squat jump",
  },
  {
    name: "Squat Jumps 180",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "squat-jumps-180.gif",
    notes: "Turn body 180 while doing squat jump",
  },
  {
    name: "Squat to Lateral Leg Lift",
    equipmentTypes: ["Band"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Quads", "Outer Thigh"],
    example: "squat-to-lateral-leg-lift.gif",
  },
  {
    name: "Standing Glute Kickbaks",
    equipmentTypes: ["Band"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes"],
    example: "standing-glute-kickbaks.gif",

    modifications: "Easier: do this without the band. Use an",
  },
  {
    name: "Standing Leg Lift",
    equipmentTypes: ["Cable", "Band"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Inner Thigh", "Outer Thigh", "Glutes"],
    example: "standing-leg-lift.jpg",
  },
  {
    name: "Standing Oblique Crunch",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: ["Oblique"],
    example: "standing-oblique-crunch.gif",
    notes: "20LB Weight Minimum",
  },
  {
    name: "Star Jump",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "star-jump.gif",
  },
  {
    name: "Step Up Lunges",
    equipmentTypes: ["Platform", "Dumbbells"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes"],
    example: "step-up-lunges.gif",

    modifications:
      "Easier: Don't hold weights\nHarder: Add a burpee, you can always add a burpee",
  },
  {
    name: "Step-Back Lunge",
    equipmentTypes: ["Bar", "Body Weight", "Dumbbells", "Squat Rack"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Glutes"],
    example: "step-back-lunge.gif",
  },
  {
    name: "Straightup Situp",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "straightup-situp.jpg",
  },
  {
    name: "Sumo Squat",
    equipmentTypes: ["Bar", "Dumbbells", "Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Legs"],
    minorMuscles: ["Inner Thigh", "Outer Thigh"],
    example: "sumo-squat.gif",
    notes:
      "Bar + 35LB. You want your legs to be just wide enough that your knees still track over your toes",
  },
  {
    name: "Superman",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Back"],
    minorMuscles: [],
    example: "superman.jpg",

    modifications:
      "Easier: alternate lifting. Lift your arms from the ground first, then your legs from the ground.",
  },
  {
    name: "Touchdown",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "touchdown.gif",
  },
  {
    name: "Tricep Dip",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Tricep"],
    example: "tricep-dip.gif",
    notes: "Find a chair or platform you can lean on.",
    modifications:
      "Easier: Legs bent closer to body\nHarder: Legs straight farther from body",
  },
  {
    name: "Tricep Kick-Back",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Tricep"],
    example: "tricep-kick-back.jpg",
  },
  {
    name: "Tricep Overhead Press",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Arms"],
    minorMuscles: ["Tricep"],
    example: "tricep-overhead-press.gif",
  },
  {
    name: "Tuck Jump",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Plyo"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "tuck-jump.gif",
  },
  {
    name: "Twisted Mountain Climbers",
    equipmentTypes: ["Body Weight", "Bosu Ball"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Full Body", "Core"],
    minorMuscles: ["Oblique"],
    example: "twisted-mountain-climbers.gif",
  },
  {
    name: "Wall Ball",
    equipmentTypes: ["Medicine Ball"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "wall-ball.gif",
    notes:
      "Toss the Medicine Ball in the air, or against a solid wall (concrete or brick) if available.",
    modifications: "Easier: use a non-weighted football, basketball etc.",
  },
  {
    name: "Weighted Jumping Jacks",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Full Body"],
    minorMuscles: [],
    example: "weighted-jumping-jacks.jpg",

    modifications: "Easier: Step out instead of jumping",
  },
  {
    name: "Weighted Punches",
    equipmentTypes: ["Dumbbells"],
    exerciseTypes: ["Cardio"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "weighted-punches.gif",

    modifications: "Easier: Punch without weights",
  },
  {
    name: "Deadbug",
    equipmentTypes: ["Body Weight"],
    exerciseTypes: ["Weight"],
    majorMuscles: ["Core"],
    minorMuscles: [],
    example: "deadbug.gif",
    notes:
      "Really good if you have lower back pain and want to do an ab workout",
  },
] as const satisfies Exercise[];

export const EQUIPMENT_TYPES = [
  ...EXERCISES.reduce((accumulator, { equipmentTypes }) => {
    equipmentTypes.forEach((equipment) => accumulator.add(equipment));

    return accumulator;
  }, new Set<EquipmentType>()),
];

export const EXERCISE_TYPES = [
  ...EXERCISES.reduce((accumulator, { exerciseTypes }) => {
    exerciseTypes.forEach((exerciseType) => accumulator.add(exerciseType));

    return accumulator;
  }, new Set<ExerciseType>()),
];

export const MAJOR_MUSCLES = [
  ...EXERCISES.reduce((accumulator, { majorMuscles }) => {
    majorMuscles.forEach((majorMuscle) => accumulator.add(majorMuscle));

    return accumulator;
  }, new Set<MajorMuscle>()),
];

export const MINOR_MUSCLES = [
  ...EXERCISES.reduce((accumulator, { minorMuscles }) => {
    minorMuscles.forEach((minorMuscle) => accumulator.add(minorMuscle));

    return accumulator;
  }, new Set<MinorMuscle>()),
];
