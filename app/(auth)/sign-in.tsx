import CustomeButton from '@/components/CustomeButton';
import CustomeInput from '@/components/CustomeInput';
import { Link, router } from 'expo-router';

import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Email and password are required.');
    }

    setIsSubmitting(true);

    try {
      Alert.alert('Success', 'You have successfully signed in!');
      router.replace('/');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while signing in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomeInput
        placeholder="Enter your email"
        value={form.email}
        label="Email"
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, email: text }));
        }}
        keyboardType="email-address"
      />
      <CustomeInput
        placeholder="Enter your password"
        value={form.password}
        label="Password"
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, password: text }));
        }}
        secureTextEntry={true}
      />
      <CustomeButton
        title="Sign In"
        onPress={submit}
        isLoading={isSubmitting}
      />
      <View className="flexjustify-center mt-5 gap-2 flex-row">
        <Text className="base-regular text-gray-100">
          Don't have an account?
        </Text>
        <Link href={'/sign-up'} className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
