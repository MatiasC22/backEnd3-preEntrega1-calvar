import { Router } from 'express';
import { generateMockingPets } from '../utils/mockingPets.js';
import { generateUsers } from '../utils/userMocking.js';
import UserModel from '../models/User.js';
import PetModel from '../models/Pet.js';

const router = Router();


router.get('/mockingpets', (req, res) => {
  const pets = generateMockingPets(100);
  res.json({ status: 'success', pets });
});

// Endpoint para generar usuarios fake 
router.get('/mockingusers', (req, res) => {
  const users = generateUsers(50); 
  res.json({ status: 'success', users });
});

// Endpoint POST para generar usuarios y mascotas en DB
router.post('/generateData', async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  try {
    const fakeUsers = generateUsers(Number(users));
    const insertedUsers = await UserModel.insertMany(fakeUsers);

    const fakePets = generateMockingPets(Number(pets));
    const insertedPets = await PetModel.insertMany(fakePets);

    res.status(201).json({
      status: 'success',
      message: `Datos generados correctamente`,
      usersInserted: insertedUsers.length,
      petsInserted: insertedPets.length,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

export default router;
