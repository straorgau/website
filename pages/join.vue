<script setup>
import Navbar from '~/components/nav/Navbar.vue';
import Footer from '~/components/nav/Footer.vue';
import BecomeMember from '~/components/home/BecomeMember.vue';
</script>

<template>
  <div class="text-fg-dark bg-bg-dark min-h-screen">
    <Navbar />
    <div class="flex flex-col p-8 gap-4">
      <h1 class="text-4xl font-bold">Join</h1>
      <h2 class="text-2xl font-semibold">Become a member at the Student Transport Riders Association.</h2>
      <span class="text-xl font-light">
        Whether you're a student or a staff member, STRA has the perfect membership for you. 
        Even costs less than a week's fare.
      </span>
      <section class="flex flex-col gap-8 pt-12 items-center">
        <h1 class="text-3xl font-bold">Our Membership Options</h1>
        <BecomeMember />
        <h2 class="text-3xl font-bold">Membership Benefits</h2>
        <div class="w-full overflow-x-auto">
          <table class="table-auto md:w-[60%] mx-auto border-collapse text-left">
            <thead class="text-fg-dark font-bold">
                <tr>
                    <td class="border border-fg-dark text-center p-4">Benefits</td>
                    <td class="border border-fg-dark text-center p-4">Student</td>
                    <td class="border border-fg-dark text-center p-4">Teacher</td>
                    <td class="border border-fg-dark text-center p-4">Associate</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-fg-dark text-center  p-1">Support the work of STRA</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                </tr>
                <tr>
                    <td class="border border-fg-dark text-center  p-1">Monthly Newsletter Update</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                </tr>
                <tr>
                    <td class="border border-fg-dark text-center  p-1">Member-only Events</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                </tr>
                <tr>
                    <td class="border border-fg-dark text-center  p-1">Member-only Chatroom (Discord)</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                    <td class="border border-fg-dark text-center  p-1">✔️</td>
                </tr>
                <tr>
                    <td class="border border-fg-dark text-center  p-4">Discounted tickets to STRA public events</td>
                    <td class="border border-fg-dark text-center  p-4">✔️</td>
                    <td class="border border-fg-dark text-center  p-4">✔️</td>
                    <td class="border border-fg-dark text-center  p-4">✔️</td>
                </tr>
                <tr>
                    <td class="border border-fg-dark text-center  p-4">STRA Voting Rights</td>
                    <td class="border border-fg-dark text-center  p-4">✔️</td>
                    <td class="border border-fg-dark text-center  p-4">✔️</td>
                    <td class="border border-fg-dark text-center  p-4">
                        <br>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>