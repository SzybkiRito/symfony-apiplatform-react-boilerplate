<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/api/auth', name: 'api_')]
class SecurityController extends AbstractController
{

    #[Route('/login', name: 'api_login', methods: ['POST'])]
    public function login(#[CurrentUser] ?User $user): Response
    {
        if (null === $user) {
            return $this->json([
                'message' => 'missing credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        return $this->json([
            'id' => $user->getId(),
        ]);
    }

    #[Route('/logout', name: 'app_logout', methods: ['POST'])]
    public function index(): Response
    {
        return $this->json([
            'code' => 200,
            'data' => 'Logout successful',
        ]);
    }
}
